

// function calculationOfGradePoints(marks) {
//     let output = (marks / 100) * 100;

//     if (output >= 95 && output <= 100) {
//         return 4.0;
//     } else if (output >= 90 && output <= 94) {
//         return 3.75;
//     } else if (output >= 85 && output <= 89) {
//         return 3.5;
//     } else if (output >= 80 && output <= 84) {
//         return 3.0;
//     } else if (output >= 75 && output <= 79) {
//         return 2.5;
//     } else if (output >= 70 && output <= 74) {
//         return 2.0;
//     } else if (output >= 65 && output <= 69) {
//         return 1.5;
//     } else if (output >= 60 && output <= 64) {
//         return 1.0;
//     } else {
//         return 0.0;
//     }
// }
const creditHours = {
    introToCompute: 4,
    functionalEnglish: 3,
    calculus_1: 3,
    pak_Studies: 3,
    appliedPhysics: 3,
    psychology: 3
};
let totalGradePoints = 0;
let totalCreditHours = 0;

for (let subject in creditHours) {
    const marks = parseFloat(prompt(`Enter marks for ${subject}:`))
    const gradePoints = calculationOfGradePoints(marks);
    const creditHoursForSubject = creditHours[subject];
    totalGradePoints += gradePoints * creditHoursForSubject;
    totalCreditHours += creditHoursForSubject;
}

const GPA = totalGradePoints / totalCreditHours;

console.log("GPA:", GPA);


function calculationOfGradePoints(marks) {
    let output = (marks / 100) * 100;

    if (output==50) {
        return 2.00;
    } else if (output==51) {
        return 2.05;
    } else if (output==52) {
        return 2.10;
    } else if (output==53) {
        return 2.15;
    } else if (output==54) {
        return 2.20;
    } else if (output==55) {
        return 2.25;
    } else if (output==56) {
        return 2.30;
    } 
    else if (output==57) {
        return 2.35;
    } 
    else if (output==58) {
        return 2.40;
    } 
    else if (output==59) {
        return 2.45;
    } 
    else if (output==60) {
        return 2.50;
    } 
    else if (output==61) {
        return 2.55;
    } 
    else if (output==62) {
        return 2.60;
    } 
    else if (output==63) {
        return 2.65;
    }
    else if (output==64) {
        return 2.70;
    }
    else if (output==65) {
        return 2.75;
    }
    else if (output==66) {
        return 2.80;
    }
    else if (output==67) {
        return 2.85;
    }
    else if (output==68) {
        return 2.90;
    }
    else if (output==69) {
        return 2.95;
    }
    else if (output==70) {
        return 3.00;
    }
    else if (output==71) {
        return 3.05;
    }
    else if (output==72) {
        return 3.10;
    } else if (output==73) {
        return 3.15;
    }
    else if (output==74) {
        return 3.20;
    }
    else if (output==75) {
        return 3.25;
    }
    else if (output==76) {
        return 3.30;
    }
    else if (output==77) {
        return 3.35;
    }
    else if (output==78) {
        return 3.40;
    }
    else if (output==79) {
        return 3.45;
    }
    else if (output==80) {
        return 3.50;
    }
    else if (output==81) {
        return 3.55;
    }
    else if (output==82) {
        return 3.60;
    }
    else if (output==83) {
        return 3.65;
    }
    else if (output==84) {
        return 3.70;
    }
    else if (output==85) {
        return 3.75;
    }
    else if (output==86) {
        return 3.80;
    }
    else if (output==87) {
        return 3.85;
    }
    else if (output==88) {
        return 3.90;
    }
    else if (output==89) {
        return 3.95;
    }
    else {
        return 4.00
    }
    // else if (output==90) {
    //     return 4.00;
    // }
    // else if (output==91) {
    //     return 4.00;
    // }
    // else if (output==92) {
    //     return 2.35;
    // }
    // else if (output==93) {
    //     return 4.00;
    // }
    // else if (output==94) {
    //     return 4.00;
    // }
    // else if (output==95) {
    //     return 4.00;
    // }
    // else if (output==96) {
    //     return 4.00;
    // }
    // else if (output==97) {
    //     return 4.00;
    // }
    // else if (output==98) {
    //     return 4.00;
    // }
    // else if (output==99) {
    //     return 4.00;
    // }
    // else if (output==100) {
    //     return 4.00;
    // }
    
    

}