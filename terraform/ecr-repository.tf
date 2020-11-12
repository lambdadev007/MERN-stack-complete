resource "aws_ecr_repository" "edl-wineclub-backend" {
  name                 = "edl-wineclub-backend"
  image_tag_mutability = "MUTABLE"
}
