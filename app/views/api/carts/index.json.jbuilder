json.cart({})

json.cart do
    @cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item.item, :id, :name, :price, :photourl
            json.user_id @current_user.id
            json.cart_id cart_item.id
            json.quantity cart_item.quantity
            # json.photourl url_for(cart_item.item.photo)
        end
    end
end