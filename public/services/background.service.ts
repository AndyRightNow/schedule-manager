let RandomBackgroundGenerator = require('./../lib/RandomBackgroundGenerator.min');

export class BackgroundService {
    private generator: any;
    private initialArgObj: Object;

    constructor() {}

    public init(argObj: Object) {
        this.initialArgObj = Object.assign({}, argObj);
        this.generator = new RandomBackgroundGenerator(argObj);
    }

    public generate() {
        this.generator.generate();
    }

    public resize() {
        this.generator = new RandomBackgroundGenerator(this.initialArgObj);
    }
}