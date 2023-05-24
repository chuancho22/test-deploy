<template>
    <div class="story">
        <b-avatar button v-if="!viewed" @click="hook_of_other_element(menu_items['stories'], 'stories')"
            :src="'/src/assets/profile_images/imgProfile_' + username + '.png'" 
            style="width: 64px; height: 64px;
            border: 2px aquamarine; border-style: solid;"></b-avatar>
        <b-avatar button v-else="viewed" @click="hook_of_other_element(menu_items['stories'], 'stories')"
            :src="'/src/assets/profile_images/imgProfile_' + username + '.png'" 
            style="width: 64px; height: 64px;
            border: 2px gray; border-style: solid;"></b-avatar>
    </div>
</template>

<script setup>

const props = defineProps(['menu_items', 'username'])


function hook_of_other_element(function_, value) {
    viewed = true;
    console.log("Viewed");
    function_(String(value).toLowerCase())
}

let viewed = false;

</script>

<style>
.story {
    margin-top: 25%;
    margin-left: 2%;
}
</style>