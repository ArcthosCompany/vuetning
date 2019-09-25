import {storiesOf} from '@storybook/vue';
import {action} from '@storybook/addon-actions';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';

import SldsCheckboxToggle from './index';

const stories = storiesOf('CheckboxToggle', module);

stories.addDecorator(withKnobs);

stories.add('Base', () => ({
    components: {SldsCheckboxToggle},
    props: {
        label: {
            default: text('label', 'Toggle Label')
        },
        messageActive: {
            default: text('message-active', 'Enabled')
        },
        messageInactive: {
            default: text('message-inactive', 'Disabled')
        },
        disabled: {
            default: boolean('disabled', false)
        },
    },
    data() {
        return {
            value: null,
        }
    },
    template: '<slds-checkbox-toggle ' +
        'v-model="value" ' +
        ':label="label" ' +
        ':message-active="messageActive" ' +
        ':message-inactive="messageInactive" ' +
        ':disabled="disabled"' +
        ' @click="action"' +
        '/>',
    methods: {action: action('clicked')},
}));
