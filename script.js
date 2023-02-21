
// do this function on page load
// window.onload = function () { calculate() };
// document.getElementById("random").onclick = function () { random() };
document.getElementById("calculate").onclick = function () { calculate() };

const arr_id_count = ["c_05", "c_10", "c_20", "c_50", "d_01", "d_02", "d_05", "d_10", "d_20", "d_50", "d_100", "misc"];

const arr_id_total = ["t_c_05", "t_c_10", "t_c_20", "t_c_50", "t_d_01", "t_d_02", "t_d_05", "t_d_10", "t_d_20", "t_d_50", "t_d_100"];

function calculate() {

    const arr_count = [];
    const arr_total = [];
    const arr_required = [];

    var count, uplift, temp, left, total = 0, base = 300;

    const arr_value = [0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 1];

    for (let i = 0; i < arr_id_count.length; i++) {
        arr_count.push(parseInt(document.getElementById(arr_id_count[i]).value));

        if (isNaN(arr_count[i])) {
            arr_count[i] = 0;
        }

        arr_total.push(arr_count[i] * arr_value[i]);

        total += arr_total[i];
    }

    temp = total.toFixed(2) - base;
    uplift = temp;

    for (let i = arr_count.length - 2; i >= 0; i--) {

        count = 0;
        left = arr_count[i];

        while (temp >= arr_value[i] && left > 0) {
            temp = temp - arr_value[i];
            temp = temp.toFixed(2);
            count++;
        }
        arr_required.push(count);
    }

    arr_required.reverse();

    for (let i = 0; i < arr_required.length; i++) {
        document.getElementById(arr_id_total[i]).innerHTML = arr_required[i];
    }

    document.getElementById("result").innerHTML = total;
    document.getElementById("uplift").innerHTML = uplift;
}

function random() {
    for (let i = 0; i < arr_id_count.length; i++) {
        document.getElementById(arr_id_count[i]).innerHTML = Math.floor(Math.random() * 10) + 1;
    }
    calculate();
}