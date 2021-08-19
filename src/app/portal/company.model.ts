export class Company {
  logo: string;
  profilePic: string;
  name: string;
  description: string;
  typeOfCompany: string;
  street: string;
  followers: number;
  about: string;
  url: string;
  fund: number;

  constructor(
    logo: string,
    profilePic: string,
    name: string,
    description: string,
    typeOfCompany: string,
    street: string,
    followers: number,
    about: string,
    url: string,
    fund: number
  ) {
    this.name = name;
    this.description = description;
    this.profilePic = profilePic;
    this.logo = logo;
    this.typeOfCompany = typeOfCompany;
    this.street = street;
    this.followers = followers;
    this.about = about;
    this.fund = fund;
    this.url = url;
  }
}
