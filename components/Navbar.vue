<template>
    <nav class="folio-navbar">
        <div class="navbar-nav">
            <nuxt-link class="nav-link" to="/">About</nuxt-link>
            <nuxt-link class="nav-link" to="/work">Work</nuxt-link>
            <nuxt-link class="nav-link" to="/abilities">Abilities</nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.folio-navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: $dark;
    padding-top: 4px;
    z-index: 6;
}
.navbar-nav {
    display: flex;
    height: $navbar-height-md-down;
    justify-content: center;
    background: $darker-warning;

    .nav-link {
        display: flex;
        align-items: center;
        padding: 0 $padding-lg;
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 1.25rem;
        border-radius: 0 0 $border-radius $border-radius;
        color: $dark;
        transition: background-color 0.5s, color 0.5s;
        &:hover {
            background-color: rgba($dark, 0.09);
            color: rgba($warning, 0.7);
        }
        &.nuxt-link-exact-active {
            background-color: $dark;
            color: $warning;
        }
    }
}

@include media-breakpoint-up(lg) {
    .folio-navbar {
        top: 100px;
        right: 20px;
        left: auto;
        padding-bottom: 6px;
        background: $dark-warning;
        border-radius: $border-radius;
    }

    .navbar-nav {
        padding: 0 $spacer * 0.5;
        flex-direction: column;
        background: #000;
        height: auto;
        .nav-link {
            padding: 12px $spacer;
            margin: $spacer * 0.5 0;
            justify-content: center;
            color: $warning;
            border-radius: $border-radius;
            &:first-child {
                margin-top: 0;
                border-radius: 0 0 $border-radius $border-radius;
            }
            &:last-child {
                margin-bottom: 0;
                border-radius: $border-radius $border-radius 0 0;
            }
            &:hover {
                background-color: rgba($warning, 0.2);
                color: rgba(#000, 0.7);
            }
            &.nuxt-link-exact-active {
                background-color: $dark-warning;
                color: #000;
            }
        }
    }
}
</style>
