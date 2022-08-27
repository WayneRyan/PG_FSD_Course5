package com.controller;

import com.bean.Product;
import com.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // enable Cross origin features to call rest api
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping(value = "productDetails", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> getAllProducts() {
        return productService.findAllProducts();
    }

    @PostMapping(value = "storeProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String storeProduct(@RequestBody Product product) {
        return productService.storeProduct(product);
    }

    @PutMapping(value = "updateProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String updateProduct(@RequestBody Product product) {
        return productService.updateProduct(product);
    }

    @DeleteMapping(value = "deleteProduct/{id}")
    public String deleteProduct(@PathVariable("id") int id) {
        return productService.deleteProduct(id);
    }
}
