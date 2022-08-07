function miniMaxSum(arr) {
    // Write your code here
    let minSum =0;
    let maxSum =0;
    let sumtotal =0;
    for(let i =0;i<arr.length;i++)
    {
        sumtotal += arr[i];
    }
    maxSum = sumtotal - arr[0];
    minSum = sumtotal - arr[0];
    for(let i =0;i<arr.length;i++)
    {
        if ((sumtotal - arr[i]) >= maxSum)
        {
            maxSum = sumtotal - arr[i];
        }
        if (sumtotal - arr[i] <= minSum)
        {
            minSum = sumtotal - arr[i];
        }
    }
    console.log(minSum+' '+maxSum);

}

miniMaxSum([793810624,895642170,685903712,623789054,468592370]);