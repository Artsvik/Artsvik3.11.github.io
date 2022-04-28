let input_email = document.querySelector("#email")

input_email.onkeyup = function () {
    console.log("emmail_with_@", input_email.value)

    if (input_email.value.includes("@")) {
        input_email.style.background = "pink"
    } else {
        input_email.style.background = "red"
        console.log("Please enter an email adress")
    }
}


let input_password = document.querySelector("#password")

input_password.onkeyup = function () {
    console.log("password_symbols", input_email.value)

    let numbers_arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let symbols = "!,@,#,$,%,^,&,*,(,)"
    let symbols_arr = symbols.split(",")
    console.log(numbers_arr.includes(+-input_password.value))
    console.log(symbols_arr.includes(input_password.value))
    if (input_password.value.length >= 8 && input_password.value.length <= 16) {

        // console.log()
        if (numbers_arr.includes(+input_password.value) && symbols_arr.includes(input_password.value)) {

            input_password.style.background = "pink"
        }
    } else {
        input_password.style.background = "red"
        console.log("Please enter a suitable password")
    }


    //     if (input_password.value.length >= 8 && input_password.value.length <= 16 &&

    //         (input_password.value.includes(0) || input_password.value.includes(1) || input_password.value.includes(2) ||
    //             input_password.value.includes(3) || input_password.value.includes(4) || input_password.value.includes(5) ||
    //             input_password.value.includes(6) || input_password.value.includes(7) || input_password.value.includes(8) ||
    //             input_password.value.includes(9)) &&

    //         (input_password.value.includes("!") || input_password.value.includes("@") || input_password.value.includes("#") ||
    //             input_password.value.includes("$") || input_password.value.includes("%") || input_password.value.includes("^") ||
    //             input_password.value.includes("&") || input_password.value.includes("*") || input_password.value.includes(","))) {
    //         input_password.style.background = "pink"
    //     } else {
    //         input_password.style.background = "red"
    //         console.log("Please enter a suitable password")
    //     }
    // }

}

// new_input.onclick = add_new_input_item

// function add_new_input_item() {
//     let new_inp = document.createElement("input")
//     new_li.innerHTML = "work 1"
//     new_elem.appendChild(new_inp)
// }