export const html = `
    <div class="order">
        <article>
          <h2>Place your order...</h2>
          <form action="#">
            <div class="biodata">
                <div>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" required/>
                  </div>
                  <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                  </div>
                  <div>
                    <label for="address">Address</label>
                    <input type="text" name="address" id="address" required/>
                  </div>
                  <div>
                    <label for="phone">Phone Number</label>
                    <input type="tel" name="phone" id="phone" required/>
                  </div>
            </div>
            <div>
              <label for="meal-options">Choose your meal</label>
              <select name="meal-options" id="meal-options" multiple size="6">
                <optgroup label="Swallow">
                  <option value="eba">Eba</option>
                  <option value="fufu">Fufu</option>
                  <option value="pounded yam">Pounded yam</option>
                </optgroup>
                <optgroup label="Soup">
                  <option value="egusi">Egusi</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="oha">Oha</option>
                  <option value="bitter leaf">Bitter leaf</option>
                  <option value="okra">Okra</option>
                  <option value="ogbono">Ogbono</option>
                </optgroup>
                <optgroup label="Rice">
                  <option value="rice and stew">Rice & Stew</option>
                  <option value="rice and ofe akwu">Rice & Ofe akwu</option>
                  <option value="jollof">Jollof rice</option>
                  <option value="fried rice">Fried rice</option>
                </optgroup>
                <optgroup label="Others">
                  <option value="yam porridge">Yam porridge</option>
                  <option value="beans porridge">Beans porridge</option>
                  <option value="potato porridge">Potato porridge</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label for="extras"
                >Write down your extras, drinks and the quantity you wish to
                order</label
              >
              <textarea name="extras" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button class="btn">Buy</button>
            </div>
          </form>
        </article>
      </div>
`;