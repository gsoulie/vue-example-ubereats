<template>
    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg" alt="">

        <div class="wrapperSearch">
            <input v-model="searchField" type="text" placeholder="De quoi avez-vous envie ?">
            <div class="searchResults"
                :style="wrapperIsOpen ? 'display:block' : 'display:none'">
                <router-link 
                    v-for="(r, index) in searchResults" :key="index"
                    :to="{ name: 'restaurant', params: { restaurantName: r.name }}"
                    class="resultWrapper" 
                    style="text-decoration: none; color: inherit;">
                    
                    <div class="wrapperImage">
                        <img :src="r.image" :alt="r.name">
                    </div>
                    <span class="title">{{ r.name }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        ref,
        watch
    } from 'vue';

    export default {
        name: 'Header',
        props: {
            searchResults: Array
        },
        emits: ["response"],
        setup(props: any, {
            emit
        }) {
            let searchField = ref('');
            let wrapperIsOpen = ref(false); // ouvrir/fermer la liste des résultats de la recherche

            watch(searchField, (newValue, oldValue) => {
                emit("response", newValue);
                wrapperIsOpen.value = newValue !== '' ? true : false;
            });

            return {
                searchField,
                wrapperIsOpen
            }
        }
    }
</script>

<style lang="scss">
    .header {
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            width: 134px;
            height: 24px;
        }

        .wrapperSearch {
            position: relative;
            input {
                background-color: #f6f6f6;
                border: none;
                height: 40px;
                width: 400px;
                outline: none;
                border-radius: 20px;
                padding: 0px 15px;
            }

            .searchResults {
                position: absolute;
                top: 100%;
                width: 100%;
                border-radius: 5px;
                background-color: white;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                z-index: 100;

                .resultWrapper {
                    transition: 0.5s;
                    background-color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 5px 0px;
                    border-radius: 5px;

                    .wrapperImage {
                        img {
                            height: 40px;
                            width: 40px;
                            border-radius: 100%;
                            margin: 0px 10px;
                        }
                    }
                    .title {
                        font-size: 1.1rem;
                    }

                    &:hover {
                        cursor: pointer;
                        background-color: rgba(0, 0, 0, 0.2);
                        transition: 0.5s;
                    }
                }
            }
        }
    }

    @media (max-width: 690px) {
        .header {
            .wrapperSearch {
                input {
                    width: 200px;
                }
            }
        }
    }
</style>