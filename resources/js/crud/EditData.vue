<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-6 m-auto">
                    <div class="card">
                        <h5 class="card-header">
                            <router-link :to="{ name: 'List'}">All List</router-link>
                        </h5>
                        <div class="card-body">
                            <form @submit.prevent="storeData">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" v-model="form.name" class="form-control" placeholder="Enter name">
                                    <span v-if="errors.name" class="text-danger"> {{ errors.name[0] }} </span>
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" v-model="form.email" class="form-control" placeholder="Enter email">
                                    <span v-if="errors.email" class="text-danger"> {{ errors.email[0] }} </span>
                                </div>
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="text" v-model="form.phone" class="form-control" placeholder="Enter phone">
                                    <span v-if="errors.phone" class="text-danger"> {{ errors.phone[0] }} </span>
                                </div>
                                <div class="form-group">
                                    <label>Gender</label>
                                    <select v-model="form.gender" class="form-control">
                                        <option value="">Select One</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <span v-if="errors.gender" class="text-danger"> {{ errors.gender[0] }} </span>
                                </div>
                                <button type="submit" class="btn btn-primary mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form: {
                name: "",
                email: "",
                phone: "",
                gender: "",
            },

            errors:{},

        }
    },

    mounted() {
        this.editData();
    },

    methods:{
        editData(){
            axios
            .get("/api/student/" + this.$route.params.id)
            .then((res) => {
                if (res.status === 200) {
                    this.form = res.data.data;
                }
                console.log(res);
            })
            .catch((err) => {
                this.errors = err.response.data.errors;
            });
        },
    },
}
</script>

<style>

</style>