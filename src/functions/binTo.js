function BinEntToDec(bin){
    let result = 0 ;
    let pos = bin.length -1
    for (let i in bin){
        if (bin[i] === '1'){
            result += Math.pow(2,pos)
        }
        pos = pos - 1
    }
    return result
}


function BinFraccToDec(bin){
    let result = 0
    let pos = 1;
    let str = '' 
    for (let i in bin){
        if (bin[i] === '1'){
            result += Math.pow(2, -pos);
            str +=(`2^-${pos} +`)
        }
        pos = pos + 1
    }
    console.log(str.slice(0,-1))
    return result
}

function Ex2 (bin){
    let exceso = Math.pow(2,bin.length -1)
    let result = BinEntToDec(bin) - exceso
    return result;
}

function Ca1(bin) {
    let result = ''
    if (bin[0] === '1'){
        for (let i in bin){
            if (bin[i] === '1'){
                result += '0' 
            }else{
                result += '1'
            }
        }
        result = 0 - BinEntToDec(result)
    }else{
        result = BinEntToDec(bin)
    }
    return result
    
}

function Ca2(bin){
    if (bin[0] === '1'){
        return Ca1(bin) - 1
    }else{
        return BinEntToDec(bin)
    }
    
}

function control(binary = 0, system = 0 ){
let result = 0

for (let i of binary){
    if (i > 1 || i < 0){
        return( "It's not binary!!");
    }
}

switch (system.toLocaleLowerCase()) {
    case 'ca2':
        result =(Ca2(binary))
        break;
    case 'ca1':
        result =(Ca1(binary))
        break;
    case 'ex2':
        result =(Ex2(binary))
        break;
    case 'float':
        result =(BinFraccToDec(binary))
        break;
    case 'integer':
        result =(BinEntToDec(binary))
        break;
    default:
        break;
}
    return result
}

export{BinEntToDec,BinFraccToDec,Ca1,Ca2,Ex2,control}