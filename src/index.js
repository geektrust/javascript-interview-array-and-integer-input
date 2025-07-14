/*
* This is the main entry point for the program. It will parse the input for you.
* You don't need to change this.
*/
function main() {
    const input = process.argv.slice(2)
    if (input.length === 0) {
        throw new Error("no command line arguments passed")
    }

    // Parse the JSON input string like: '[[4,5,6,7,0,1,2], 0]'
    const parsed = JSON.parse(input[0])
    const nums = parsed[0]
    const target = parsed[1]

    const output = handle(nums, target)
    console.log(output)
}

/*
 * Use this method to write your solution. 
 * Make sure to return the final result.
 */
function handle(nums, target) {
    
    return -1

}

main()
