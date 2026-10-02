let choice;
let line = "=".repeat(40)
let currentGateCode = "";
let isGateValid = false;
let totalRevenue = 0;
let totalGateSales = 0;
let rideCount;
let pricePerRide;
let isPalindrome = false;
let isDivisedBy9 = false;

do {
    let inputChoice = prompt(`
    ${line}
    HỆ THỐNG BÁN VÉ KHU VUI CHƠI DREAM PARK
    ${line}
    1. Nhập và kiểm chuẩn mã vé cổng
    2. Tính tiền vé trò chơi
    3. Thẩm định mã vé cổng may mắn

    0. Thoát chương trình
    ${line}

    Mời bạn nhập lựa chọn : 
    `);

    if (inputChoice === null){
        console.log("Lựa chọn không hợp lệ");
        continue;
    }

    choice = Number(inputChoice.trim());

    switch (choice){
        case 1 : 
            currentGateCode = "";
            isGateValid = false;

            let inputCode = prompt("Nhập mã cần chuẩn hóa : ").trim().toUpperCase();

            if (inputCode === null){
                console.log("Chưa nhập mã vé cổng");
                break;
            }

            if (inputCode.length < 6){
                console.log("Mã tối thiểu phải 6 kí tự");
                break;
            }

            if (!inputCode.startsWith("PRK-")){
                console.log("Mã phải bắt đầu bằng PRK-");
                break;
            }

            if (inputChoice.includes(" ")){
                console.log("Mã chứa khoảng trắng");
                break;
            }

            currentGateCode = inputCode;
            isGateValid = true;

            console.log(`Mã sau chuẩn hóa : ${inputCode}`);
            break;

        case 2 : 
            if (isGateValid == false){
                console.log("Vui lòng nhập mã vé hợp lệ ở chức năng 1");
                break;
            }

            while(true){
                rideCount = prompt("Nhập số lượng vé : ");

                if(rideCount === null){
                    console.log("Hủy giao dịch");
                    break;
                }

                if(rideCount.length = 0 || Number.isNaN(rideCount) || rideCount <= 0){
                    console.log("Dữ liệu không hợp lệ");
                    continue;
                }
                break;
            }

            while (true){
                pricePerRide = prompt("Nhập tiền cho mỗi vé : ");

                if(pricePerRide === null){
                    console.log("Hủy giao dịch");
                    break;
                }

                if(pricePerRide.length <= 0 || Number.isNaN(pricePerRide) || pricePerRide <= 0){
                    console.log("Dữ liệu không hợp lệ");
                    continue;
                }
                break;
            }

            let baseCost = rideCount * pricePerRide;

            let discount = 0;

            if (rideCount >= 4){
                discount = Math.round(baseCost * 0.1);
            }

            let accidentInsurance = Math.round((baseCost - discount) * 0.08);

            let totalPayment = (baseCost - discount) + accidentInsurance;

            totalRevenue += totalPayment;
            totalGateSales++;

            console.log(`
            ${line}
            HÓA ĐƠN VÉ TRÒ CHƠI
            ${line}
            
            Mã vé trò chơi : ${currentGateCode}
            Số vé trò chơi : ${rideCount}
            Giá vé mỗi trò chơi : ${pricePerRide}
            Chi phí cơ sở : ${baseCost}
            Tiền giảm giá : ${discount}
            Phí bảo hiểm tai nạn : ${accidentInsurance}
            Tổng thanh toán ${totalPayment}
            `);

            currentGateCode = "";
            isGateValid = false;
            break;
        
        case 3 :
            if(isGateValid == false){
                console.log("Mã không hợp lệ");
                break;
            }

            let gateCode = currentGateCode.slice(4);

            if(!/^\d+$/.test(gateCode)){
                console.log("Chuỗi phải toàn số");
                break;
            }

            if (/^0+$/.test(gateCode)){
                console.log("Chuỗi không được chứa toàn 0");
                break;
            }
            
            let reversedCode = "";

            for (let i = gateCode.length - 1 ; i >= 0 ; i--){
                reversedCode += gateCode[i];
            }

            let digitSum = 0

            for (let i = 0 ; i < gateCode.length ; i++){
                digitSum += gateCode[i];
            }

            if(reversedCode == gateCode){
                isPalindrome = true;
            }

            if (digitSum % 9 === 0){
                isDivisedBy9 = true;
            }

            let prize = "";

            if (isPalindrome == true && isDivisedBy9 == true){
                prize = "Giải đặc biệt - Voucher 800k";
            } else if(isPalindrome == true){
                prize = "Giải nhất - Voucher 100k";
            } else if (isDivisedBy9 == true){
                prize = "Giải nhì - Giảm 25k";
            }else {
                prize = "không trúng giải";
            }

            console.log(`
            Chuỗi số : ${gateCode}
            Chuỗi đảo ngược ${reversedCode}
            Tổng CS chia hết cho 9 : ${isDivisedBy9 ? "Có" : "Không"}
            Kết quả : ${prize}
            `)
            break;

        case 0 : 
            console.log("Tạm biệt");
            break;

        default : 
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}while(choice !== 0)