import type { ExtractPropTypes } from "vue";

export const BadgeType = {
    primary: 'primary'
}

export const badgeProps = {
    text: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '',
    },
    status: {
        type: String,
        default: BadgeType.primary
    }
}
export type BadgeProps = ExtractPropTypes<typeof badgeProps>
