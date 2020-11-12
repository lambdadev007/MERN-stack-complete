resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDFIp8L5C1LosAxStpsFMySJd3mLdGphjuredykGDPQP/bwF6V2zehrE3AW0Wvbm/7qaY0+0jkB3XFIw+yjzKm+X5ghtxF7KELgtcpl4Jsazby2olSquP84yauggJkGK3QQebM0HzFoxh3v8BBy2BjoFww+Vp4Q+Bs0rWfQ8iEWz+DSzWzN+dRfjF1u3b6LOd8Q6NOcOiAMDW57kF8TUACUc0YRcB7SDipIJmpHbg4dvf8IAiohW9/l9K7QD2YGCHPQA0bSxpsbH3BFn016ikc2CS4qAc81U4US6kWSaWB5bwWN7mPFyS/Bcu4BHVacnRgBIS4UJRAc6Y0P3GPlLHmhrz2T+Zw7n/LKYeC9UulY8nWIMTTNzp66LNbRcIXWo8SDIbeqAuVY3pD0ij8g/8EcwhNbgLWbuzMiRdnR/kSi9zf/atTe3hiJAoWhd3IwO9P94GHjtwqaLI9fg42wXsZvCW/90a4FoLG7cijEG+mGbRUFWFwYQnBE5dvC9LmY606imzerap7y7Tnq0kaTq07A9Uj4veEIhrsCy/BfeiuHA9cw8rZZD7lMYG2wq1wBTlxyXnO4b9fEvD05k+X6q6smqqceuhJAi1suPjpI9DeQli3fS+a6NQoQF6AmLmOlh/d2odKfU5fwtKJ+lwPlr25z0EMeHfaNLdNSEf2D6cDV7w== deployer@wineapp"
}

resource "aws_instance" "staging" {
  ami           = "ami-068663a3c619dd892"
  instance_type = "t2.micro"
	security_groups = ["${aws_security_group.staging.name}"]
	key_name = aws_key_pair.deployer.key_name
	iam_instance_profile = aws_iam_instance_profile.node_profile.name

	root_block_device {
		volume_size = 20
	}

  tags = {
    Name = "Staging"
		Env = "staging"
  }
}

resource "aws_eip" "staging_up" {
  instance = aws_instance.staging.id
}


