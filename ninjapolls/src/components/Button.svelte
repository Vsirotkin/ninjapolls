<script>
    export let type = 'primary';
    export let flat = false;
    export let inverse = false;
</script>

<button class:  ={condition}>
    <slot><!-- optional fallback --></slot>
</button>

<style></style>