
// do this function on page load
// window.onload = function () { calculate() };
// document.getElementById("random").onclick = function () { random() };
document.getElementById("calculate").onclick = function () { calculate() };

const arr_id_count = ["c_05", "c_10", "c_20", "c_50", "d_01", "d_02", "d_05", "d_10", "d_20", "d_50", "d_100"];

const arr_id_total = ["t_c_05", "t_c_10", "t_c_20", "t_c_50", "t_d_01", "t_d_02", "t_d_05", "t_d_10", "t_d_20", "t_d_50", "t_d_100"];

function calculate() {

    const arr_count = [];
    const arr_total = [];
    const arr_required = [];

    var count, uplift, temp, total = 0, base = 300;


    const arr_value = [0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100];





    for (let i = 0; i < arr_id_count.length; i++) {
        arr_count.push(parseInt(document.getElementById(arr_id_count[i]).value));

        if (isNaN(arr_count[i])) {
            arr_count[i] = 0;
        }
        console.log(arr_count[i]);

        // arr_count.push(Math.floor(Math.random() * 10) + 1);

        arr_total.push(arr_count[i] * arr_value[i]);

        total += arr_total[i];
    }

    // arr_count.push(parseInt(document.getElementById(arr_id_count[10]).value));

    // // arr_count.push(Math.floor(Math.random() * 10) + 1);

    // arr_total.push(arr_count[10] * arr_value[10]);

    // total += arr_total[10];

    temp = total;
    uplift = total - base;

    for (let i = arr_count.length - 1; i >= 0; i--) {

        count = 0;

        while (temp >= arr_value[i]) {
            console.log(temp + " - " + arr_value[i]);

            temp = temp - arr_value[i];
            temp = temp.toFixed(2);
            count++;
        }
        arr_required.push(count);
    }

    arr_required.reverse();

    for (let i = 0; i < arr_required.length; i++) {
        console.log(arr_required[i] + " x " + arr_value[i]);
        document.getElementById(arr_id_total[i]).innerHTML = arr_required[i];
    }

    console.log(total);

    document.getElementById("result").innerHTML = total;
    document.getElementById("uplift").innerHTML = uplift;
}

function random() {
    for (let i = 0; i < arr_id_count.length; i++) {
        document.getElementById(arr_id_count[i]).innerHTML = Math.floor(Math.random() * 10) + 1;
    }
    calculate();
}