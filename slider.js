const languages = [
  {
    category: ["mobile"],
    logo: "photo/oppo reno 8z.jpg",
    title: "Oppo Reno 8Z 5G ",
    textplay: "$389.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://storage-asset.msi.com/global/picture/image/feature/nb/GT/GT77/0428/kv-laptop.png",
    title: "MSI TItan G77",
    textplay: "$950.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://assorted.downloads.oppo.com/static/assets/products/oppo-watch-1/images/1920/sec4-img2-165d0e746d71680275794cd4101eb0ac.png",
    title: "Oppo Watch",
    textplay: "$200.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/laptop-category-latitude-14-9440-lf-rf-800x620.png",
    title: "Dell USA",
    textplay: "$850.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://i.ebayimg.com/images/g/5EsAAOSw1LRk7geE/s-l1200.jpg",
    title: "Oppo Watch 4 Pro",
    textplay: "$150.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://dream2000.com/media/catalog/product/cache/df0fd26a5939738811f1a7c10cac02a5/o/p/oppo-a17-_4_64_-lake-blue-_a_-1.jpg",
    title: "Oppo A17",
    textplay: "$500.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://storage-asset.msi.com/event/2021/nb/2021-RTX-30-Series-gaming/images/book1.png",
    title: "MSI GE76",
    textplay: "$1000.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://m.media-amazon.com/images/I/712+lS1mk-L.jpg",
    title: "Apple Watch",
    textplay: "$300.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pdp/galazy-a/galaxy-a03s/gallery/blue/Galaxy-A03s-blue-1.jpg?$product-details-jpg$",
    title: "Galaxy A03s",
    textplay: "$300.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/EDIT_Untitled_1.png",
    title: "Acer Nitro 5",
    textplay: "$900.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://www.lowyat.net/wp-content/uploads/2022/02/Samsung-Galaxy-Tab-S8-ultra-1-1.jpg",
    title: "Galaxy Tab S8",
    textplay: "$850.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://cdn.uc.assets.prezly.com/6779fb8a-20e8-4aac-a38e-b67bedd4a880/PREDATOR-TRITON-500-SE-PT516-52s-06.jpg",
    title: "Acer Launcher",
    textplay: "$1200.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://cdn1.smartprix.com/rx-iJOnXHW3j-w420-h420/vivo-watch.jpg",
    title: "Vivo Watch ",
    textplay: "$150.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://i5.walmartimages.com/seo/Apple-MacBook-Pro-14-inch-Apple-M1-Pro-chip-with-8-core-CPU-and-14-core-GPU-16GB-RAM-512GB-SSD-Space-Gray_7188030c-48fd-4d7a-95e2-9bbcf31084d4.98f0c75b0086cd034957eab3bb66b617.jpeg",
    title: "Macbook Pro",
    textplay: "$1000.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693611639254",
    title: "Apple Watch",
    textplay: "$350.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://www.buyitdirect.ie/Images/A1GX650RW-LS044W_3_Supersize.jpg?v=43",
    title: "Asus ROG Zephyrus",
    textplay: "$2000.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://m.media-amazon.com/images/I/71RQMHbQTHL.jpg",
    title: "Microsoft Tap",
    textplay: "$850.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://i.gadgets360cdn.com/large/huawe-new_1639036249025.jpg",
    title: "Huawei Watch GT3",
    textplay: "$200.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://i5.walmartimages.com/asr/e1b75960-cc9a-43ff-86ee-54b01a506061.e26e0b81f2de927222de10831d1248ec.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    title: "Asus ROG ",
    textplay: "$900.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$",
    title: "Samsung",
    textplay: "$400.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/wearables/watch-gt4/en/watch-gt4-kv.jpg",
    title: "Huawei Watch ",
    textplay: "$250.00",
    button: "Oder Now",
  },
  {
    category: ["laptob"],
    logo: "https://i5.walmartimages.com/seo/Apple-MacBook-Pro-14-inch-Apple-M1-Pro-chip-with-8-core-CPU-and-14-core-GPU-16GB-RAM-512GB-SSD-Space-Gray_7188030c-48fd-4d7a-95e2-9bbcf31084d4.98f0c75b0086cd034957eab3bb66b617.jpeg",
    title: "Macbook Pro",
    textplay: "$1000.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://i.ebayimg.com/images/g/ACUAAOSwTfFbTBh7/s-l1200.jpg",
    title: "ZenFone 8 ROG ",
    textplay: "$350.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://images-eu.ssl-images-amazon.com/images/I/618aU2-6AaL._AC_UL200_SR200,200_.jpg",
    title: "Oppo",
    textplay: "$600.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/7/177295_2020.jpg",
    title: "Iphone 13 Pro Max 120GB",
    textplay: "$800.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20230509112620.png",
    title: "Asus Watch ",
    textplay: "$150.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://www.zdnet.com/a/img/resize/7c591697e1820251e16f46fd17208e5610485a11/2023/03/21/6bf47018-7a32-4782-8cbf-1b424e93e9fc/lenovo-tab-11-plus-removebg-preview-1.png?auto=webp&fit=crop&height=900&width=1200",
    title: "Lenovo Tap",
    textplay: "$750.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5499/5499200_sd.jpg;maxHeight=640;maxWidth=550",
    title: "Apple Ipad Pro",
    textplay: "$1050.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/RealmeWatchS38.jpg",
    title: "Realme Watch ",
    textplay: "$150.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://btech.com/cdn-cgi/image/quality=50,format=auto/media/catalog/product/cache/96922cd3700b085e5de923d580eb59f8/5/1/51q1h1nzonl._ac_.jpg",
    title: "Realme Watch 3 Pro",
    textplay: "$250.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/i/p/iphone14-plus-33.jpg",
    title: "Iphone 14 Plus 120GB",
    textplay: "$1000.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://i.ebayimg.com/thumbs/images/g/wUgAAOSwD3VkM-Vv/s-l640.jpg",
    title: "Iphone Xs Max",
    textplay: "$500.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://images.samsung.com/in/galaxy-watch5/feature/galaxy-watch5-bioacitive-sensor-bia-mo.jpg",
    title: "Galaxy Watch 5",
    textplay: "$250.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://www.apple.com/newsroom/images/product/ipad/standard/apple_new-ipad-air_new-design_09152020.jpg.news_app_ed.jpg",
    title: "Ipad Air",
    textplay: "$650.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://i5.walmartimages.com/seo/SAMSUNG-Galaxy-Watch-Bluetooth-Smart-Watch-46mm-Silver-SM-R800NZSAXAR_fd4ac977-2091-48d8-9c42-e4bd76c25860_2.1e08fbcdac48c4ccfbef70130eef5fbf.png",
    title: "Galaxy Watch ",
    textplay: "$350.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://i.zst.com.br/thumbs/12/35/2c/-473040810.jpg",
    title: "Lenovo Tap P11 Plus",
    textplay: "$900.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://snpi.dell.com/snp/images/products/large/en-us~AC688631_v1/AC688631_v1.jpg",
    title: "Dell  USA",
    textplay: "$250.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://images.news18.com/ibnlive/uploads/2022/04/dell-latitude-9330.jpg",
    title: "Dell latitude",
    textplay: "$900.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://www.notebookcheck.net/fileadmin/Notebooks/Xiaomi/Poco_X4_GT/4_zu_3_Teaser_News.jpg",
    title: "Poco X4",
    textplay: "$400.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/s2.jpg",
    title: "Lenovo S2",
    textplay: "$250.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://image.oppo.com/content/dam/oppo/product-asset-library/accessory/oppo-pad-air/global/v2/assets/module-technology/module-technology-color-phone2-purple-1920.png",
    title: "Oppo Pad Air",
    textplay: "$700.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://www.reliancedigital.in/medias/Vivo-V16-Smart-Phone-493177665-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjA2MTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDQxL2gyNC85OTE5MjYxMTQ3MTY2LmpwZ3wzYmE0YjQyMmY5Y2NlZTY1ZWMzNDgzYzM5NWU2MmI5M2RkMGVkMTM3NDdhODQwOTg4NmQ2YmM4OWQ5ZDVlMDgy",
    title: "Vivo Y16",
    textplay: "$350.00",
    button: "Oder Now",
  },
  {
    category: ["smart"],
    logo: "https://m.economictimes.com/thumb/msid-69611488,width-1200,height-900,resizemode-4,imgsize-335648/lenovo-ego-1-.jpg",
    title: "Lenovo EGO",
    textplay: "$250.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://i.zst.com.br/thumbs/12/35/2c/-473040810.jpg",
    title: "Lenovo Tap P11 Plus",
    textplay: "$900.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://fdn.gsmarena.com/imgroot/news/19/07/samsung-galaxy-tab-s6-keyboard-renders/-727/gsmarena_003.jpg",
    title: "Samsung galaxy Tap s6",
    textplay: "$600.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/phones/nova10-se/list/list-starry-silver.png",
    title: "Huawei",
    textplay: "$450.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://shunliphone.com/wp-content/uploads/2022/06/rog-phone-6-white.jpg",
    title: "Asus ROG",
    textplay: "$750.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://i5.walmartimages.com/asr/675cd0c4-6e5f-4b42-8567-b61fb3806e92.c0c581638ea02a0ae6a47e1295b4cc02.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    title: "Asus ROG Tablet",
    textplay: "$600.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1685633952-xiaomi-tablet-6478bb8b8e8a4.jpg?crop=1xw:1xh;center,top&resize=980:*",
    title: "Xiaomi Tablet",
    textplay: "$500.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://m.media-amazon.com/images/I/61fDxgcyBDL.jpg",
    title: "Nord CE 2",
    textplay: "$350.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://www.jiomart.com/images/product/original/493177735/realme-c33-32-gb-3-gb-ram-night-sea-mobile-phone-digital-o493177735-p594311454-0-202210070509.jpeg?im=Resize=(420,420)",
    title: "realme C33",
    textplay: "$450.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://image.oppo.com/content/dam/oppo/product-asset-library/accessory/oppo-pad-air/global/v2/assets/module-technology/module-technology-color-phone2-purple-1920.png",
    title: "Oppo Pad Air",
    textplay: "$700.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://static-ecapac.acer.com/media/catalog/product/a/c/acer-iconia-tab-p10-p10-11-portfolio-case-wallpaper-ui-iron-gray-08_nt.lfssg.001.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500",
    title: "Acer iconia Tap P10",
    textplay: "$550.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://fdn.xiaomiui.net/wp-content/themes/xiaomiuiwp/assets/phones/devicephotos/camellia_redmi_note_11_se_2.png?strip=all&lossy=1&ssl=1",
    title: "Redmi 11 Se2",
    textplay: "$450.00",
    button: "Oder Now",
  },
  {
    category: ["mobile"],
    logo: "https://5.imimg.com/data5/SELLER/Default/2022/4/RR/VF/HU/149926717/new-factory-price-7-3inch-reolme7-pro-plus-smartphone-4g-5g-unlock-android-mobile-8gb-256gb-original.jpg",
    title: "Reolme7 Pro",
    textplay: "$450.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/lenovo_tablet_lenovo_tab_p12_pro_subseries_hero.jpg",
    title: "Tap P12 Pro",
    textplay: "$650.00",
    button: "Oder Now",
  },
  {
    category: ["tablet"],
    logo: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/XiaomiPad6edit.jpg",
    title: "Xiaomi Pad 6",
    textplay: "$850.00",
    button: "Oder Now",
  },
];
const cardContainer = document.querySelector(".boxs-flixe");
const listBtn = document.querySelector(".list");
const button = document.querySelectorAll(".item");
let value = "all";
displayType(languages);
button.forEach((btn) => {
  btn.addEventListener("click", function (click) {
    const check = click.currentTarget;
    if (check.classList.contains("active")) {
      return null;
    } else {
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
      }
      check.classList.add("active");
    }
    const title = check.textContent;
    const splitTitle = title.split(" ");
    value = splitTitle[0].toLowerCase();
    const filterLanguages = languages.filter((each) => {
      return (
        each.category[0] == value ||
        each.category[1] == value ||
        each.category[2] == value
      );
    });
    if (value == "all") {
      displayType(languages);
    } else {
      displayType(filterLanguages);
    }
  });
});
function displayType(condition) {
  const display = condition
    .map(function (item) {
      return `<article class="boxs">
        <img class="logo" src="${item.logo}" />
        <h2 class="titlee">${item.title}</h2>
        <h3 class="textplay">${item.textplay}</h3>
        <h3 class="click"><a href="#">${item.button}</a></h3>
        </article>`;
    })
    .join("");
  cardContainer.innerHTML = display;
}
//srull bar 2
