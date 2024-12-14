<template>
<table class="scheldue__table">
    <thead class="scheldue__thead">
        <tr class="scheldue__tr">
            <th class="scheldue__th" colspan="2">
                {{props.name}}
            </th>
        </tr>
    </thead>
    <tbody class="scheldue__tbody">
        <!-- <tr class="scheldue__tr" v-for="(leson, key) in props.lesons">
            <td class="scheldue__td">
                {{ key }}
            </td>
            <td class="scheldue__td">
                {{ leson }}
            </td>
        </tr> -->
        <tr class="scheldue__tr" v-for="i in 8" >
            <td class="scheldue__td">
                {{ i }}
            </td>
            <td class="scheldue__td">
                {{ props.lesons.hasOwnProperty(i) ? props.lesons[i] : "" }}
            </td>
        </tr>
    </tbody>
</table>
</template>

<script setup>

const props = defineProps({
    name: {type: String, default: "ПОНЕДЕЛЬНИК"},
    lesons: {type: Object, default: {}}
})

</script>

<style scoped>

.scheldue__table {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #F4F4F4;
    border-radius: 10px;
    text-align: center;
    border-collapse: collapse;
    width: 300px;
}

.scheldue__thead {
    color: #00ABE1;
    font-size: 1.5rem;
    text-align: center;
}

.scheldue__td:first-child {
    color: #00ABE1;
    font-weight: 700;
    width: 32px;
}

.scheldue__td:last-child {
    text-align: start;
}

.scheldue__th {
    padding: 3px 0px;
}


td {
    padding: 10px;
    text-align: center;
    border: 1px solid #00ABE1;
}

tr:first-child {
    border-top: none; 
}    

tr:last-child td {
    border-bottom: none;
}

tr td:first-child{
    border-left: none;
}

tr td:last-child {
    border-right: none;
}    

    

    

</style>