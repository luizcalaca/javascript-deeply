
class BinaryTree { //O(log n)

    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

    addAll(root) {
        if (root === null)
            return 0
            
        let left = this.addAll(root.left)
        let right = this.addAll(root.right)
        
        return root.value + left + right
    }

    treeMax(root) {
        if (root === null)
            return 0
            
        let left = this.treeMax(root.left)
        let right = this.treeMax(root.right)
        
        return Math.max(root.value, left, right)
    }

    treeHeight(root) {
        if (root === null)
            return 0
            
        let left = this.treeHeight(root.left)
        let right = this.treeHeight(root.right)
        
        return Math.max(left, right) + 1
    }

    existsInTree(root, value) {
        if (root === null)
            return false
        
        if (root.value === value)
            return true

        let left = this.existsInTree(root.left, value)
        let right = this.existsInTree(root.right, value)
    
        return left || right
    }

    reverseTree(root) {
        if (root === null)
            return

        this.reverseTree(root.left)
        this.reverseTree(root.right)

        root.left = root.right
        root.right = root.left

        return root
    }

}

let root = new BinaryTree(1)
root.left = new BinaryTree(3)
root.right = new BinaryTree(4)

root.left.left = new BinaryTree(2)
root.left.right = new BinaryTree(2)

console.log(root.addAll(root))
console.log(root.treeMax(root))
console.log(root.treeHeight(root))
console.log(root.existsInTree(root, 4))
console.log(root.reverseTree(root))
