Product.all.destroy_all

10.times.each do
  Product.create!(
    name: FFaker::Product.product_name,
    description: FFaker::Lorem.paragraph,
    price: rand(5.0..100.0).round(2),
  )
end


after :products do
  Product.all.each_with_index do |product, index|
    downloaded_image = open("http://placekitten.com/700/400?image=#{index}")
    product.image.attach(io: downloaded_image, filename: "product_image_#{product.id}.jpeg")
  end
end
