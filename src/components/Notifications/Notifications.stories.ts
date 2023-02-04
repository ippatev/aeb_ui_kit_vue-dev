import AebNotifications from './Notifications.vue';
import {Story} from '@storybook/vue3';
import icon from '@/assets/images/nt-icon.svg';
import {shallowRef} from 'vue';
import {Notification} from '@/components/Notifications/Notifications.vue';

const notifications = [
    {
        id: 0,
        message: 'init',
        header: 'header',
        iconPath: icon
    },
    {
        id: 1,
        message: 'test',
        header: 'header',
        iconPath: icon
    }
];

export default {
    title: 'Components/New notifications',
    components: {AebNotifications},
    args: {
        notifications
    }
};

export const Default: Story<typeof AebNotifications> = (args) => ({
    components: {AebNotifications},
    template: `
        <aeb-notifications
            @handleClose="removeNotifications"
            :notifications="storyNotifications"
        />
    `,
    setup() {
        const storyNotifications = shallowRef(args.notifications);
        const removeNotifications = (id: number): void => {
            storyNotifications.value = storyNotifications.value.filter((item: Notification) => item.id !== id);
        };
        return {storyNotifications, removeNotifications};
    }
});
