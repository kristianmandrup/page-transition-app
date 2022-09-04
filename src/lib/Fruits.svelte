<script>
  export let data;

  import ListItem from "./ListItem.svelte";
</script>

<div class={"flex-col items-center justify-center py-4 px-4"}>
  <h1 class="my-4 text-xl">List of fruits</h1>

  <ul class="divide-y-2 divide-gray-100">
    {#each data.items as item (`f-${item.name}`)}
      <ListItem {item} href={`/fruits/${item.name}`} />
    {/each}
  </ul>
</div>
