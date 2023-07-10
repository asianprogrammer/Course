export default function per(number_A, number_B, action){
    if(action === void 0){action = 'default'}
    if(action === "default"){
        return (number_A * 100) / number_B;
    }else {
        return (number_A / 100) *number_B;
    }
}