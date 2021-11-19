class RoyalFamily {
    constructor (name, parents) {
        this.name = name;
        this.parents = parents;
        this.childOf = function () {
            return this.parents.map(parents => parents.name).join(' & ') || 'unknown';
        }
    }
}

let elizabeth = new RoyalFamily("Elizabeth", [{ name: 'George'}, { name: 'Elizabeth'}]);
elizabeth.childOf();

let william = new RoyalFamily("William", [{ name: 'Diana'}, { name: 'Charles'}]);
william.childOf();

let charlotte = new RoyalFamily("Charlotte", [{ name: 'William'}, { name: 'Catherine'}]);
charlotte.childOf();



module.exports = RoyalFamilyfa
