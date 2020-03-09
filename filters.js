import Vue from "vue";

// Make uppercase
// Vue.filter("uppercase", function(v) {
//     return v.toUpperCase();
// });

// Reverse Text
Vue.filter("reversing", function(v) {
    return v
        .split("")
        .reverse()
        .join("");
});

// Shorten Text
Vue.filter("shorten", function(value, len, text) {
    return value.substring(0, len)  + text;
});
