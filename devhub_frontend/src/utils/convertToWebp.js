export const convertToWebP = (file, quality = 0.8) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
  
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
  
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
  
        canvas.toBlob(
          blob => {
            const webpFile = new File(
              [blob],
              file.name.replace(/\.\w+$/, ".webp"),
              { type: "image/webp" }
            );
            resolve(webpFile);
          },
          "image/webp",
          quality
        );
      };
  
      img.onerror = reject;
    });
  };
  