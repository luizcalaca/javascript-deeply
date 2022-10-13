class BinaryTree { //O(log n)

    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }

    static addAll(root) {
        if(root == null) 
            return 0
        return (root.value + this.addAll(root.left) + this.addAll(root.right))
    }
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
root.right.left.right = new BinaryTree(8);

let sum = BinaryTree.addAll(root);
console.log(sum)
//Level 0: 2^0 = 1
//Level 1: 2^1 = 2
//Level 2: 2^2 = 4
//Level 3: 2^3 = 8

//total of BinaryTrees = 2^h - 1 (h is the level's quantity)

