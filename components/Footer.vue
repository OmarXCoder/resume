<template>
    <footer class="folio-footer">
        <div class="folio-container text-center">
            <h1
                class="title folio-heading section-heading mb-4"
            >Let's work together</h1>
            <h6 class="title mb-4">I'm avaiable now for freelance work.</h6>
            <div class="mb-5">
                <a
                    href="mailto:omarxcoder@gmail.com"
                    class="btn btn-warning text-dark px-5"
                >
                    <i class="fa fa-envelope mr-2"></i>
                    <span class="text-uppercase">Message Me</span>
                </a>
            </div>
            <div class="text-muted font-size-sm">
                <span class="mr-1">Built with</span>
                <span class="text-success">NUXTJS</span>
                <a
                    class="text-decoration-none text-dark"
                    href="https://github.com/OmarXCoder/resume"
                >
                    <span class="mr-1">&middot; view source on</span>
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@include media-breakpoint-up(lg) {
    .folio-footer {
        margin-left: $prime-width;
        margin-right: $navbar-width-lg-up;
    }
}
</style>
