/* eslint-disable no-undef */
const assert = require('assert');
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.seeElement('.card-item-bottom a');
    const firstRestaurant = locate('.card-name').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(locate('.card-item-bottom a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-item');
    const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.card-item');
    const likedRestaurantTitle = await I.grabTextFrom('.card-name');

    assert.strictEqual(1, visibleLikedRestaurants);
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking restaurant', async ({ I }) => {
    I.seeElement('.card-item-bottom a');
    I.click(locate('.card-item-bottom a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.card-item');
    const visibleLikeRestaurants = await I.grabNumberOfVisibleElements('.card-item');

    I.seeElement('.card-item-bottom a');
    I.click('.card-item-bottom a');
    I.seeElement('#likedButton');
    I.click('#likedButton');
    I.amOnPage('/#/favorite');
    const visibleUnlikeRestaurants = await I.grabNumberOfVisibleElements('.card-item');

    assert.strictEqual(1, visibleLikeRestaurants);
    assert.strictEqual(0, visibleUnlikeRestaurants);
});
