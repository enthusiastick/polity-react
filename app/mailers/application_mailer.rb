class ApplicationMailer < ActionMailer::Base
  default from: "noreply@#{ENV['HOME_URL']}"
  layout "mailer"
end

