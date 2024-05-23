import UserProfile from "./userProfile.js";
export default class UserProfileBuilder{
    private userProfile: UserProfile
    constructor(){
        this.userProfile= new UserProfile()
    }

public setName(name: string): UserProfileBuilder {
    this.userProfile.setName(name)
    return this
  }

  public setEmail(email: string): UserProfileBuilder {
    this.userProfile.setEmail(email)
    return this
  }
  public setNumber(number: string): UserProfileBuilder {
    this.userProfile.setPhoneNumber(number)
    return this
  }
  public build(): UserProfile {
    return this.userProfile
  }
}