export function pizzas() {
  let pizzas = document.createElement("section");
  pizzas.id = "pizzas";
  pizzas.classList.add(
    "grid",
    "grid-cols-[repeat(auto-fit,minmax(240px,1fr))]",
    "grid-rows-3",
    "gap-1",
    "px-4",
    "py-4"
  );
  pizzas.innerHTML = `  <div
  class="h-full w-full rounded-lg border-2 border-solid border-black bg-slate-900"
>
  <img
    src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    alt=""
  />
</div>
<div class="h-full w-full rounded-lg border-2 border-solid border-black">
  <img
    src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    alt=""
  />
</div>
<div class="h-full w-full rounded-lg border-2 border-solid border-black">
  <img
    src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    alt=""
  />
</div>
<div class="h-full w-full rounded-lg border-2 border-solid border-black">
  <img
    src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    alt=""
  />
</div>
<div class="h-full w-full rounded-lg border-2 border-solid border-black">
  <img
    src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    alt=""
  />
</div>
<div class="h-full w-full rounded-lg border-2 border-solid border-black">
  <img
    src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
    alt=""
  />
</div>`;
  return pizzas;
}
