<template>
    <a
        :href="link"
        :class="['btn', 'btn-icon', 'btn-icon-flip', 'm-1', textColor, size]"
    >
        <i :class="['fab', icon, bg]"></i>
        <i :class="['fab', icon, bgHover]"></i>
    </a>
</template>

<script>
export default {
    props: {
        link: String,
        icon: String,
        textColor: {
            type: String,
            default: "text-white"
        },
        size: {
            type: String,
            default: "btn-lg"
        },
        bg: {
            type: String,
            default: "bg-dark"
        },
        bgHover: {
            type: String,
            default: "bg-primary"
        }
    }
};
</script>

<style lang="scss">
.btn-icon {
    padding: 0;
    line-height: 2rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    &.btn-sm {
        line-height: 1.5rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    &.btn-lg {
        line-height: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
    }
}
.btn-icon-flip {
    position: relative;
    overflow: hidden;
    &,
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }

    i {
        transition: top 0.3s;
        line-height: inherit;
        position: absolute;
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        &:last-child {
            top: 100%;
        }
    }

    &:hover i:first-child {
        top: -100%;
    }

    &:hover i:last-child {
        top: 0;
    }
}
</style>
