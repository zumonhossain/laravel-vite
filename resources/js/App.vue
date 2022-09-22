<template>
    <div>
        <h1>Hello I am from Vuejs app</h1>
        <h1>Hello I am from Vuejs app</h1>
        <h1>Hello I am from Vuejs app</h1>
        <h1>Hello I am from Vuejs app</h1>
        <h1>Hello I am from Vuejs app</h1>
        <h1>Hello I am from Vuejs app</h1>
        <h1>Hello I am from Vuejs app</h1>

        <router-link :to="{ name: 'Add'}">Add New</router-link>

        <router-view></router-view>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="">

</style>