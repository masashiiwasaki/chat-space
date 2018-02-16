FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/images/pic_3229_24.jpg")
    user
    group
  end
end
