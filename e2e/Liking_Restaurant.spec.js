/* eslint-disable eol-last */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const emptyFavoriteRestoText = "You don't have any favorite restaurant!";

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurant-list');
  I.see(emptyFavoriteRestoText, '#restaurant-list');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#restaurant-list');

  I.amOnPage('/');
  I.seeElement('a.btn-detail');
  const firstRestoCard = locate('a.btn-detail').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__card');
  const likedCardTitle = await I.grabTextFrom('a.btn-detail');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle); // membandingkan
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#restaurant-list');

  I.amOnPage('/');
  I.seeElement('a.btn-detail');
  const firstRestoCard = locate('a.btn-detail').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee('.restaurant-item__card');
  const likedCardTitle = await I.grabTextFrom('a.btn-detail');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});

Scenario('Post Customer Review', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-item__card a.btn-detail');
  I.click(locate('.restaurant-item__card a.btn-detail').first());

  I.seeElement('#reviewForm');
  I.fillField('#inputName', 'Afifa Atira');
  I.fillField('#inputReview', 'Makanannya enak dan murah banget!');
  I.click('#submitReview');

  I.seeElement('.card-review');
});