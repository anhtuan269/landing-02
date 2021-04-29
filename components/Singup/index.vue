<template>
  <div class="tablet:pt-60 tablet:pl-60 tablet:pb-60  relative bg-white tablet:w-470 w-315 pt-27 pl-27 pb-27">
      <h2 class="text-black text-24 font-extrabold mb-30"> Get started now</h2>
      <form action="">
          <div class="form-group mb-10 ">
              <input type="text" placeholder="Name" class=" border-1 border-black text-black px-4 py-2">
          </div>
           <div class="form-group mb-10 ">
              <input type="text" placeholder="Email" class=" border-1 border-black text-black px-4 py-2">
          </div>
           <div class="form-group mb-10 ">
              <input type="text" placeholder="Phone Number" class=" border-1 border-black text-black px-4 py-2">
          </div>
           <div class="form-group mb-10 ">
              <input type="text" placeholder="Company Name" class=" border-1 border-black text-black px-4 py-2">
          </div>
      </form>
      <div class="tablet:mt-10 mt-5">
          <button class="text-white px-28 py-14 bg-blue-color font-bold  hover:bg-button duration-500 ease-in-out ">Sign Up</button>
      </div>
      <div class="tablet:mt-30 mt-5">
          <p class="text-12 heading-l-18">
              Support:
              <span class="text-blue-color ml-1">help@udix.com</span>
          </p>
      </div>

      <div class="absolute top-20 right-20 bottom-20 opacity-0 tablet:opacity-100">
          <img class="h-full" src="@/static/image/line.png" alt="">
      </div>
      <div class="absolute tablet:bottom-60 right-5 bottom-27 ">
          <img class="w-86 tablet:w-full" src="@/static/image/computer.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>