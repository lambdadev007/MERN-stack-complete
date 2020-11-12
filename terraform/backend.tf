terraform {
  backend "s3" {
    bucket = "wineapp-terraform-state"
    key    = "terraform.state"
    region = "us-east-1"
  }
}
