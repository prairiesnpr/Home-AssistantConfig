class CustomFanCard extends Polymer.Element {

    static get template() {
        return Polymer.html `
            <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
            <style>
                :host {
                    line-height: inherit;
                }
                .speed {
                    min-width: 30px;
                    max-width: 30px;
                    height: 30px;
                    margin-left: 2px;
                    margin-right: 2px;
                    background-color:#759aaa;
                        border: 1px solid lightgrey;
                    border-radius: 4px;
                        font-size: 10px !important;
                    color: inherit;
                    text-align: center;
                        float: right !important;
                    padding: 1px;
                    }

            </style>
            <hui-generic-entity-row hass="[[hass]]" config="[[_config]]">
                <div class='horizontal justified laout' on-click="stopPropagation">
                    <button
                            class='speed'
                            style='[[_lowOnColor]]'
                            toggles name="low"
                            on-click='setSpeed'
                            disabled='[[_isOnLow]]'>LOW</button>
                    <button
                            class='speed'
                            style='[[_medOnColor]]'
                            toggles name="medium"
                            on-click='setSpeed'
                            disabled='[[_isOnMed]]'>MED</button>
                    <button
                            class='speed'
                            style='[[_highOnColor]]'
                            toggles name="high"
                            on-click='setSpeed'
                            disabled='[[_isHigh]]'>HIGH</button>
                    <button
                            class='speed'
                            style='[[_smartOnColor]]'
                           toggles name="smart"
                            on-click='setSpeed'
                            disabled='[[_isOnSmart]]'>SMRT</button>
                    <button
                            class='speed'
                            style='[[_offColor]]'
                            toggles name="off"
                            on-click='setSpeed'
                            disabled='[[_isOffState]]'>OFF</button>
                    </div>
            </hui-generic-entity-row>
        `;
    }

    static get properties() {
        return {
            hass: {
                type: Object,
                observer: 'hassChanged'
            },
            _config: Object,
            _stateObj: Object,
            _lowOnColor: String,
            _medOnColor: String,
            _highOnColor: String,
            _smartOnColor: String,
            _offColor: String,
            _isOffState: Boolean,
            _isOnState: Boolean,
            _isOnLow: Boolean,
            _isOnMed: Boolean,
           _isOnHigh: Boolean,
            _isOnSmart: Boolean
        }
    }

    setConfig(config) {
        this._config = config;
    }

    hassChanged(hass) {

        const config = this._config;
        const stateObj = hass.states[config.entity];

        let speed;
        if (stateObj && stateObj.attributes) {
            speed = stateObj.attributes.speed || 'off';
        }

        let low;
        let med;
        let high;
        let smart;
        let offstate;

        if (stateObj && stateObj.attributes) {
            if (stateObj.state == 'on' && stateObj.attributes.speed == 'low') {
                low = 'on';
            } else if (stateObj.state == 'on' && stateObj.attributes.speed == 'medium') {
                med = 'on';
            } else if (stateObj.state == 'on' && stateObj.attributes.speed == 'high') {
                high = 'on';
            } else if (stateObj.state == 'on' && stateObj.attributes.speed == 'smart') {
                smart = 'on';
            } else {
               offstate = 'on';
            }
        }

        let lowcolor;
        let medcolor;
        let highcolor;
        let smartcolor;
        let offcolor;

        if (low == 'on') {
            lowcolor = 'background-color: #43A047';
        } else {
            lowcolor = '';
        }

        if (med == 'on') {
            medcolor = 'background-color: #43A047';
        } else {
            medcolor = '';
        }

        if (high == 'on') {
            highcolor = 'background-color: #43A047';
        } else {
            highcolor = '';
        }

        if (smart == 'on') {
            smartcolor = 'background-color: #43A047';
        } else {
            smartcolor = '';
        }

        if (offstate == 'on') {
            //offcolor = 'background-color: #43A047';
            offcolor = 'background-color: #f44c09';
        } else {
            offcolor = '';
        }

        this.setProperties({
            _stateObj: stateObj,
            _isOffState: stateObj.state == 'off',
            _isnLow: low === 'on',
            _isOnMed: med === 'on',
            _isOnHigh: high === 'on',
            _isOnSmart: smart === 'on',
            _lowOnColor: lowcolor,
            _medOnColor: medcolor,
            _highOnColor: highcolor,
            _smartOnColor: smartcolor,
            _offColor: offcolor
        });
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    setSpeed(e) {
        const speed = e.currentTarget.getAttribute('name');
        if (speed === 'smart'){
            this.hass.callService('fan', 'set_preset_mode', {
                entity_id: this._config.entity,
                preset_mode: speed
            });
        }
        else if (speed === 'off') {
            this.hass.callService('fan', 'turn_off', {
                entity_id: this._config.entity,
            });        
        }
        else {
            var percent = 100;
            if (speed === 'low') {
                percent = 33;
            }
            if (speed === 'medium') {
                percent = 66;
            }
            if (speed === 'high') {
                percent = 100;
            }
            this.hass.callService('fan', 'set_percentage', {
                entity_id: this._config.entity,
                percentage: percent
            });
        }
    }

}

customElements.define('custom-fan-card', CustomFanCard);



