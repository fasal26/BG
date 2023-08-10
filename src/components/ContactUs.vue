<template>
    <div class="baba-flex-col baba-svc-container">
        <div class="form_enter">
            <h1>Feel free to contact us</h1>
            <p>For all enquiries, please WhatsApp us using the form below</p>
            <div class="form_item_container ">
                <input type="text" placeholder="Enter your name" id="name" v-model="formReq.name">
            </div>
            <div class="form_item_container">
                <input type="text" placeholder="Enter your email" id="mail" v-model="formReq.email">
            </div>
            <div class="form_item_container ">
                <input type="text" placeholder="Enter your subject" id="subject" v-model="formReq.subject">
            </div>
            <div class="form_item_container ">
                <textarea name="message" placeholder="Enter your message" id="message" cols="30" rows="5" v-model="formReq.msg"></textarea>
            </div>
            <div class="form_item_container_submit">
                <a :href="url">
                    <button class="button-submit pointer">Send us a message</button>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

let formReq = reactive({
    name: "",
    email: "",
    subject: "",
    msg: ""
})

let url = computed(() => `https://api.whatsapp.com/send?phone=966554420580&text=${encodeURIComponent(`Name: ${formReq.name}\nEmail: ${formReq.email}\nSubject: ${formReq.subject}\nMessage: ${formReq.msg}`)}`)

</script>

<style scoped>
.form_enter{
    display: flex;
    flex-direction: column;
    flex: 1 1;
    display: flex;
    margin: auto;
}

.form_enter > h1{
    color: var(--color-dark-gold);;
}

.form_enter > p{
    padding: 15px 0
}

.form_enter textarea{
    padding: 15px 0 0 15px; 
    border: 1px solid #CCCCCC;
    border-radius: 8px;
}

.form_item_container{
    display: flex;
    flex-direction: column;
    padding-top: 15px;
}

.form_item_container_submit{
    text-align: center;
    padding-top: 37px;
}

.button-submit{
    background: var(--color-dark-gold);;
    border-radius: 5px;
    width: 100%;
    height: 45px;
    font-size: 15px;
    color: white;
    border-color: transparent;
}

.button-submit > a{
    text-decoration: none;
    color: white;
}


</style>
