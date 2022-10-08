alias: Notify of events
description: 'Camera alerts'
id: a7b736332d6345abb15a526bacc4251a 
trigger:
  platform: mqtt
  topic: frigate/events
  id: frigate-event
  value_template: '{{ value_json["after"]["camera"] }}'
  variables:
    trigger_type: "{{ trigger.payload_json[\"type\"] }}"
    after_zones: "{{ trigger.payload_json[\"after\"][\"entered_zones\"] }}"
    before_zones: "{{ trigger.payload_json[\"before\"][\"entered_zones\"] }}"
    camera: "{{ trigger.payload_json[\"after\"][\"camera\"] }}"
    id: "{{ trigger.payload_json[\"after\"][\"id\"] }}"
    label: "{{ trigger.payload_json[\"after\"][\"label\"] }}"
condition:
  - condition: or
    conditions:
      - condition: template
        value_template: "{{ trigger_type == 'new' }}"
      - condition: template
        value_template: "{{ before_zones | length == 0 }}"
  - condition: template
    value_template: "{{ camera in ['garage', 'front_porch', 'back_yard'] }}"
  - condition: template
    value_template: "{{ label in ['car', 'person', 'dog'] }}"
action:
  - variables:
      ha_url_var: !secret ha_url
  - choose:
      - conditions:
          - condition: trigger
            id: frigate-event
        sequence:
          # Send the initial notification with snapshot and info. 
          - service: script.send_dynamic_notification_all 
            data:
              id: "{{ id }}"
              ha_url_var: "{{ ha_url_var }}"
              title: >-
                {{ label }} was detected on {{ camera | replace("_", " ") | title }}
              message: >-
                {{ label }} detected in the {{ after_zones[0] | replace("_", " ") | title }}
              notifTag: "{{ id }}"
              notifIcon: mdi:doorbell-video
              group: >-
                frigate-notification-{{ camera }}
              importance: max
              image: >-
                /api/frigate/notifications/{{ id }}/snapshot.jpg
              clickAction: ''
          # Wait until the end of the notification has occurred.
          - repeat:
              until:
                - condition: template
                  value_template: '{{ trigger_type == "end" }}'
              sequence:
                - wait_for_trigger:
                    - platform: mqtt
                      topic: frigate/events
                      payload: "{{ trigger.payload_json[\"after\"][\"id\"] }}"
                      value_template: "{{ value_json[\"after\"][\"id\"] }}"
                  continue_on_timeout: false
                  timeout: '00:02:00'
                - condition: template
                  value_template: '{{ wait.trigger.payload_json[''type''] == ''end'' }}'
                - service: script.send_dynamic_notification_all 
                  data:
                    id: '{{ id }}'
                    ha_url_var: '{{ ha_url_var }}'
                    title: >-
                      {{label | title}} was detected on {{camera | replace("_", "") | title }}
                    message: >-
                      {{label | title}} detected in the {{after_zones[0] | replace("_", " ") | title }}
                    notifTag: '{{ id }}'
                    notifIcon: mdi:doorbell-video
                    group: >-
                      frigate-notification-{{
                      trigger.payload_json["after"]["camera"] }}
                    importance: default
                    image: >-
                      /api/frigate/notifications/{{ id }}/snapshot.jpg
                    video: >-
                      {{ ha_url_var }}/api/frigate/{{ id }}/{{ camera }}/clip.mp4
                    clickAction: >-
                      {{ ha_url_var }}/api/frigate/notifications/{{ id }}/{{ camera }}/clip.mp4
    default: []
mode: parallel
max: 10

