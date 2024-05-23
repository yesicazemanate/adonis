/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UserProfileBuilder from './user/UserProfilesBuilder.js'

router.get('/user-profile', async () => {
  const userProfile = new UserProfileBuilder()
    .setName('John Doe')
    .setEmail('john.doe@example.com')
    .setNumber('555-1234')
    .build()

  return userProfile.toString()
})