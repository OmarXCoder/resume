<template>
    <div>
        <folio-prime></folio-prime>
        <folio-navbar></folio-navbar>
        <main class="folio-main">
            <nuxt/>
        </main>
        <folio-footer></folio-footer>
    </div>
</template>
<script>
import FolioPrime from "~/components/Prime";
import FolioNavbar from "~/components/Navbar";
import FolioFooter from "~/components/Footer";
export default {
    components: { FolioPrime, FolioNavbar, FolioFooter }
};
</script>

<style lang="scss">
@include media-breakpoint-up(lg) {
    .folio-main {
        margin-left: $prime-width;
        margin-right: $navbar-width-lg-up;
    }
}
</style>
