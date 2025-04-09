import {
    Product,
    Appliance,
    Clothing
} from "./products.js";

describe('TEST SUIT - Products Class', () => {
    const testProduct = new Product({
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090,
        keywords: [
            "socks",
            "sports",
            "apparel"
        ]
    });

    it(`Has the correct properties`, () => {
        expect(testProduct.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(testProduct.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
        expect(testProduct.name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
        expect(testProduct.rating).toEqual({
            stars: 4.5,
            count: 87
        });
        expect(testProduct.priceCents).toEqual(1090);
    });

    it('Get the stars URL', () => {
        expect(testProduct.getStarsUrl()).toEqual('images/ratings/rating-45.png');
    });

    it('Get the price', () => {
        expect(testProduct.getPriceCents()).toEqual('$10.90');
    });

    it(`Doesn't display any extra info`, () => {
        expect(testProduct.extraInfoHTML()).toEqual('');
    });
});
describe('TEST SUIT - Clothing Class', () => {
    const testProduct = new Clothing({
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
            stars: 4.5,
            count: 56
        },
        priceCents: 799,
        keywords: [
            "tshirts",
            "apparel",
            "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    });

    it(`Has the correct properties`, () => {
        expect(testProduct.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
        expect(testProduct.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
        expect(testProduct.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
        expect(testProduct.rating).toEqual({
            stars: 4.5,
            count: 56
        });
        expect(testProduct.priceCents).toEqual(799);
        expect(testProduct.sizeChartLink).toEqual('images/clothing-size-chart.png');
    });

    it('Get the stars URL', () => {
        expect(testProduct.getStarsUrl()).toEqual('images/ratings/rating-45.png');
    });

    it('Get the price', () => {
        expect(testProduct.getPriceCents()).toEqual('$7.99');
    });

    it('Display extra info', () => {
        expect(testProduct.extraInfoHTML()).toContain(
            `<a href="${testProduct.sizeChartLink}" target="_blank">`
        );
        expect(testProduct.extraInfoHTML()).toContain(
            'Size Chart'
        );
    });
});
describe('TEST SUIT - Appliance Class', () => {
    const testProduct = new Appliance({
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "images/products/black-2-slot-toaster.jpg",
        name: "2 Slot Toaster - Black",
        rating: {
            stars: 5,
            count: 2197
        },
        priceCents: 1899,
        keywords: [
            "toaster",
            "kitchen",
            "appliances"
        ],
        type: 'appliance',
        instructionsLink: 'images/appliance-instructions.png',
        warrantyLink: 'images/appliance-warranty.png'
    });

    it(`Has the correct properties`, () => {
        expect(testProduct.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
        expect(testProduct.image).toEqual('images/products/black-2-slot-toaster.jpg');
        expect(testProduct.name).toEqual('2 Slot Toaster - Black');
        expect(testProduct.rating).toEqual({
            stars: 5,
            count: 2197
        });
        expect(testProduct.priceCents).toEqual(1899);
        expect(testProduct.instructionsLink).toEqual('images/appliance-instructions.png');
        expect(testProduct.warrantyLink).toEqual('images/appliance-warranty.png');
    });

    it('Get the stars URL', () => {
        expect(testProduct.getStarsUrl()).toEqual('images/ratings/rating-50.png');
    });

    it('Get the price', () => {
        expect(testProduct.getPriceCents()).toEqual('$18.99');
    });

    it('Display extra info', () => {
        expect(testProduct.extraInfoHTML()).toContain(
            `<a href="${testProduct.instructionsLink}" target="_blank">`
        );
        expect(testProduct.extraInfoHTML()).toContain(
            'Instructions'
        );
        expect(testProduct.extraInfoHTML()).toContain(
            `<a href="${testProduct.warrantyLink}" target="_blank">`
        );
        expect(testProduct.extraInfoHTML()).toContain(
            'Warranty'
        );
    });
});