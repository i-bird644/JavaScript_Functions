console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {

    if (count >= 0) {
        for (let c = 0; c <= count; c++) {
            if (c % 2 !== 0) {
                let oddmsg = " is an odd number";
                console.log(c + oddmsg);
            } 
        }
        
    } else {
        let errormessage = "You can't input a negative number";
        console.log(errormessage);
    }

}

//printOdds(-1);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(username, userage) {
    

    console.log("User age: " +userage);
    if ((username == undefined || username == 0) || (userage == undefined || userage == 0)) {
        
        let errmsg = "Pls input the correct name and Age";
        console.log(errmsg);

    } else {

        let aboveSixteen = `Congrats ${username}, you can drive!`;
        let belowSixteen = `Sorry ${username}, but you need to wait until you're 16.`;
        if (userage < 16) {
            
            console.log(belowSixteen);

        } else {
            
            console.log(aboveSixteen);

        }
    }

}

//checkAge("Can", "3");


//Exercise 3
console.log("EXERCISE 3:\n==========\n");


/* Writting a function that point the location of x and y
coordinates in cartesian planee*/

function pointLocation(x, y) {
  if (x === 0 && y === 0) {
    console.log("The point lies at the origin.");
  } else if (x === 0) {
    console.log("The point lies on the y-axis.");
  } else if (y === 0) {
    console.log("The point lies on the x-axis.");
  } else if (x > 0 && y > 0) {
    console.log("The point lies in the first quadrant.");
  } else if (x < 0 && y > 0) {
    console.log("The point lies in the second quadrant.");
  } else if (x < 0 && y < 0) {
    console.log("The point lies in the third quadrant.");
  } else {
    console.log("The point lies in the fourth quadrant.");
  }
}

//pointLocation(4, -1);

//Exercise 4
console.log("EXERCISE 4:\n==========\n");

//Finding the kind of triangle using the parameter a, b, c.
function triangleType(a, b, c){

    if ((a == undefined || a == 0) || (b == undefined || b == 0) || (c == undefined || c == 0)) {
        
        let errmsgx = "Pls input the correct values";
        console.log(errmsgx);
        
    } else {

        
        if (a + b > c && a + c > b && b + c > a) {//This one line coustesy of chatgpt
            
            if (a == b && a == c) {

                let msg = "This is an equilateral Triangle";
                console.log(msg);

            } else if (a == b || a == c || b == c) {
                
                let msg2 = "This is an Isoceles Triangle";
                console.log(msg2);

            } else {

                let msg3 = "This is an Scalene Triangle";
                console.log(msg3);

            }

        } else {
            let errmsg = "Invalid Triangle, Try Again!!!";
            console.log(errmsg);
        }
    }    
    
}




//Exercise 5
console.log("EXERCISE 5:\n==========\n");

//Checking user's average data usage from their 30days data plan

function dataUsage(plan_limit, current_day, used_data) {
    
    let plan_period = 30;
    let avg_data = plan_limit / plan_period;
    let rem_days = plan_period - current_day;
    let rem_data = plan_limit - used_data;    
    //let r_avg_data = rem_data / rem_days;
    let days_used = current_day;
    let c_avg_used = used_data / days_used;
    


    if (rem_data <= 0) {
        let data_msg = `You have currebt used up your:  ${plan_limit}GB data plan`;
        console.log(data_msg);
    } else {
        console.log(` ${days_used} days used. ${rem_days} days remaining`);
        console.log(` Average daily use for current data plan (${plan_limit}GB) for ${plan_period} days: ${avg_data}GB/day `);

        if (c_avg_used > avg_data) {
            
            console.log("You are EXCEEDING your average daily use:");
            console.log( `Average data usage of your data plan for 30days period: ${avg_data}GB/day`);
            console.log(`Current Avg daily data usage for ${days_used} days used is: ${c_avg_used}GB/day`);

            let diff_avgused = c_avg_used - avg_data;
            let exc_data = diff_avgused * plan_period;
            let safe_usage = avg_data - diff_avgused;
            console.log(`You'll exceed your data plan by ${exc_data}GB, with current average data usage`);
            console.log(`To stay below your data plan, use no more than ${safe_usage}GB/day.`);

        } else if (c_avg_used == avg_data) {
            
            console.log("You are within your average data usage for your data plan");

        } else if (c_avg_used < avg_data) {
            
            console.log("You are below your average data usage for your data plan" );
        }
    }
}

