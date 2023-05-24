<template>
    <div class="main-mensajes">
        <span class="mr-1">
            <v-btn @click="hook_of_other_element(menu_items['inicio'], 'inicio')" style="background-color: transparent;">
                <img src="../src/assets/sw_icons/Recurso_37.png" title="Inicio" alt="Boton pagina de inicio"
                    style="max-height: 25px; background-color: transparent;">
            </v-btn>
        </span>

        <div class="window-container" style="height: 80vh; width: 90vw; display: 100%; justify-content: center;">
            <vue-advanced-chat height="calc(100vh - 60px)" theme='dark' :show-new-messages-divider="false"
                :current-user-id="currentUserId" :rooms="JSON.stringify(rooms)" :rooms-loaded="true"
                :messages="JSON.stringify(messages)" :messages-loaded="messagesLoaded"
                @send-message="sendMessage($event.detail[0])" @fetch-messages="fetchMessages($event.detail[0])" />
        </div>

    </div>
</template>

<script>
import { register } from 'vue-advanced-chat'
register()
export default {
    props: {
        currentUserId: { type: String, required: true },
        theme: { type: String, required: true },
        isDevice: { type: Boolean, required: true }
    },
    emits: ['show-demo-options'],
    data() {
        return {
            addNewRoom: null,
            addRoomUsername: '',
            inviteRoomId: null,
            currentUserId: '1234',
            showDemoOptions: true,
            removeRoomId: null,
            users: [
                {
                    _id: '3456',
                    username: 'Fran Sanchez',
                    avatar: 'assets/imgs/snow.png'
                },
                {
                    _id: '4567',
                    username: 'Tamara Ruiz',
                    avatar: 'assets/imgs/snow.png',
                },
                {
                    _id: '2345',
                    username: 'Marta Ravi',
                    avatar: "../src/assets/profilePicture_MartaRavi.png"
                }
            ],
            rooms: [
                {
                    roomId: '1',
                    roomName: 'Noche de cineeee!',
                    avatar: "../src/assets/img_perfil_group1.png",
                    unreadCount: 1,
                    index: 3,
                    lastMessage: {
                        _id: 'xyz',
                        content: 'Last message received',
                        senderId: '4567',
                        username: 'Tamara Ruiz',
                        timestamp: '15:22',
                        saved: true,
                        distributed: false,
                        seen: false,
                        new: true
                    },
                    users: [
                        {
                            _id: '2345',
                            username: 'Marta Ravi',
                            avatar: 'assets/imgs/doe.png',
                            status: {
                                state: 'online',
                                lastChanged: '5 Mayo, 14:30'
                            }
                        },
                        {
                            _id: '4567',
                            username: 'Tamara Ruiz',
                            avatar: 'assets/imgs/snow.png',
                            status: {
                                state: 'offline',
                                lastChanged: '5 Mayo, 15:22'
                            }
                        },
                        {
                            _id: '3456',
                            username: 'Fran Sanchez',
                            avatar: 'assets/imgs/snow.png',
                            status: {
                                state: 'offline',
                                lastChanged: '5 Mayo, 15:21'
                            }
                        }
                    ],
                    typingUsers: [4321]
                }/*,
                {
                    roomId: '2',
                    roomName: 'Marta Ravi',
                    avatar: "../src/assets/profilePicture_MartaRavi.png",
                    index: 3,
                    lastMessage: {
                        _id: 'xyz',
                        content: 'Last message received',
                        senderId: '2345',
                        username: 'Marta Ravi',
                        timestamp: '14:30',
                        saved: true,
                        distributed: false,
                        seen: false,
                        new: true
                    },
                    users: [
                        {
                            _id: '2345',
                            username: 'Marta Ravi',
                            avatar: 'assets/imgs/doe.png',
                            status: {
                                state: 'online',
                                lastChanged: 'today, 14:30'
                            }
                        }
                    ],
                    typingUsers: [4321]
                }*/
            ],
            messages: [
                {
                    _id: '27',
                    content: 'Que peli quereis ver?',
                    senderId: '2345',
                    username: 'Marta Ravi',
                    date: '5 Mayo',
                    timestamp: '13:45',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'Yo no tengo claro si hoy puedo',
                    senderId: '4567',
                    username: 'Tamara Ruiz',
                    date: '5 Mayo',
                    timestamp: '14:03',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'A mi me va perfecto',
                    senderId: '3456',
                    username: 'Fran Sanchez',
                    date: '5 Mayo',
                    timestamp: '14:04',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'He visto anunciada la nueva de Mario',
                    senderId: '3456',
                    username: 'Fran Sanchez',
                    date: '5 Mayo',
                    timestamp: '14:04',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'Que os parece?',
                    senderId: '3456',
                    username: 'Fran Sanchez',
                    date: '5 Mayo',
                    timestamp: '14:04',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'Por mi bien',
                    senderId: this.currentUserId,
                    username: '',
                    date: '5 Mayo',
                    timestamp: '14:56',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'Yo me apunto',
                    senderId: '2345',
                    username: 'Marta Ravi',
                    date: '5 Mayo',
                    timestamp: '15:00',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'Tu al final vienes, Tamara?',
                    senderId: '2345',
                    username: 'Marta Ravi',
                    date: '5 Mayo',
                    timestamp: '15:00',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'A que hora?',
                    senderId: '4567',
                    username: 'Tamara Ruiz',
                    date: '5 Mayo',
                    timestamp: '15:11',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'La pelicula empieza a las 19h',
                    senderId: '3456',
                    username: 'Fran Sanchez',
                    date: '5 Mayo',
                    timestamp: '15:21',
                    saved: true,
                    seen: true,
                    new: false
                },
                {
                    _id: '27',
                    content: 'Ah, pues entonces si',
                    senderId: '4567',
                    username: 'Tamara Ruiz',
                    date: '5 Mayo',
                    timestamp: '15:22',
                    saved: true,
                    seen: true,
                    new: false
                }
            ],
            messagesLoaded: true
        }
    },
    methods: {
        fetchMessages({ options = {} }) {
            setTimeout(() => {
                if (options.reset) {
                    this.messages = this.addMessages(true)
                } else {
                    this.messages = [...this.addMessages(), ...this.messages]
                    this.messagesLoaded = true
                }
                //this.addNewMessage()
            })
        },
        addMessages(reset) {
            const messages = []
            const texto = ['Que peli quereis ver?', 'Yo no tengo claro si hoy puedo', 'A mi me va perfecto', 'He visto anunciada la nueva de Mario',
                'Que os parece?', 'Por mi bien', 'Yo me apunto', 'Tu al final vienes,Tamara?', 'A que hora?', 'La pelicula empieza a las 19h', 'Ah, pues entonces si']
            const id = ['2345', '4567', '3456', '3456', '3456', '1234', '2345', '2345', '4567', '3456', '4567']
            const nombres = ['Marta Ravi', 'Tamara Ruiz', 'Fran Sanchez', 'Fran Sanchez', 'Fran Sanchez', '', 'Marta Ravi', 'Marta Ravi', 'Tamara Ruiz', 'Fran Sanchez', 'Tamara Ruiz']
            const dia = ['5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo', '5 Mayo']
            const hora = ['13:45', '14:03', '14:04', '14:04', '14:04', '14:56', '15:00', '15:00', '15:11', '15:21', '15:22']
            for (let i = 0; i < 11; i++) {
                messages.push({
                    _id: reset ? i : this.messages.length + i,
                    content: texto[i],
                    senderId: id[i],
                    username: nombres[i],
                    date: dia[i],
                    timestamp: hora[i]
                })
            }
            return messages
        },
        addMessagess(reset) {
            const messages = []
            for (let i = 0; i < 30; i++) {
                messages.push({
                    _id: reset ? i : this.messages.length + i,
                    content: `${reset ? '' : 'paginated'} message ${i + 1}`,
                    senderId: '4321',
                    username: 'John Doe',
                    date: new Date().toDateString(),
                    timestamp: new Date().toString().substring(16, 21)
                })
            }
            return messages
        },
        sendMessage(message) {
            this.messages = [
                ...this.messages,
                {
                    _id: this.messages.length,
                    content: message.content,
                    senderId: this.currentUserId,
                    timestamp: new Date().toString().substring(16, 21),
                    date: new Date().toDateString(),

                }
            ]
        },
        addNewMessage() {
            setTimeout(() => {
                this.messages = [
                    ...this.messages,
                    {
                        _id: this.messages.length,
                        content: 'NEW MESSAGE',
                        senderId: '1234',
                        timestamp: new Date().toString().substring(16, 21),
                        date: new Date().toDateString()
                    }
                ]
            }, 2000)
        },
        resetForms() {
            this.disableForm = false
            this.addNewRoom = null
            this.addRoomUsername = ''
            this.inviteRoomId = null
            this.invitedUsername = ''
            this.removeRoomId = null
            this.removeUserId = ''
        },
        resetRooms() {
            this.loadingRooms = true
            this.loadingLastMessageByRoom = 0
            this.roomsLoadedCount = 0
            this.rooms = []
            this.roomsLoaded = true
            this.startRooms = null
            this.endRooms = null
            this.roomsListeners.forEach(listener => listener())
            this.roomsListeners = []
            this.resetMessages()
        },
        resetMessages() {
            this.messages = []
            this.messagesLoaded = false
            this.lastLoadedMessage = null
            this.previousLastLoadedMessage = null
            this.listeners.forEach(listener => listener())
            this.listeners = []
        },
        addRoom() {
            this.resetForms()
            this.addNewRoom = true
        },

        async createRoom() {
            this.disableForm = true
            this.addNewRoom = false
            this.addRoomUsername = ''
            this.fetchRooms()
        },
        inviteUser(roomId) {
            this.resetForms()
            this.inviteRoomId = roomId
        },
        async addRoomUser() {
            this.disableForm = true
            this.inviteRoomId = null
            this.invitedUsername = ''
            this.fetchRooms()
        },
        removeUser(roomId) {
            this.resetForms()
            this.removeRoomId = roomId
            this.removeUsers = this.rooms.find(room => room.roomId === roomId).users
        },
        async deleteRoomUser() {
            this.disableForm = true
            this.removeRoomId = null
            this.removeUserId = ''
            this.fetchRooms()
        },
        fetchRooms() {
            this.resetRooms()
            this.fetchMoreRooms()
        },
        async fetchMoreRooms() {
            if (this.endRooms && !this.startRooms) {
                this.roomsLoaded = true
                return
            }
        }
    }
}
</script>

<script setup>

const props = defineProps(['menu_items'])

function hook_of_other_element(function_, value) {
    function_(String(value).toLowerCase())
}

</script>

<style lang="scss">
.main-mensajes {
    width: 100%;
    height: 100%;
    background-image: url("src/assets/background.png");
    background-repeat: repeat-x;
    background-size: cover;
    background-color: #ffffff;
    background-position: top;
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 10px;
}

.window-container {
    width: 100%;
}

.window-mobile {
    form {
        padding: 0 10px 10px;
    }
}

form {
    padding-bottom: 20px;
}

input {
    padding: 5px;
    width: 140px;
    height: 21px;
    border-radius: 4px;
    border: 1px solid #d2d6da;
    outline: none;
    font-size: 14px;
    vertical-align: middle;

    &::placeholder {
        color: #9ca6af;
    }
}

button {
    background: #1976d2;
    color: #fff;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 12px;
    margin-left: 10px;
    border: none;
    font-size: 14px;
    transition: 0.3s;
    vertical-align: middle;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }

    &:disabled {
        cursor: initial;
        background: #c6c9cc;
        opacity: 0.6;
    }
}

.button-cancel {
    color: #a8aeb3;
    background: none;
    margin-left: 5px;
}

select {
    vertical-align: middle;
    height: 33px;
    width: 152px;
    font-size: 13px;
    margin: 0 !important;
}

body {
    background: #DFECF6;
    margin: 0;
}

.app-container {
    font-family: 'Quicksand', sans-serif;
    padding: 10px 20px 20px;
}

.vac-room-container .vac-room-badge {
    background-color: #3CC6A2 !important;
    color: var(--chat-room-color-badge);
    margin-left: 5px;
}

.vac-badge-counter.vac-room-badge {
    background-color: #3CC6A2;
}
</style>