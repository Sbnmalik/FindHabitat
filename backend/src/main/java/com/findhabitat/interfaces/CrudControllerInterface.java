package com.findhabitat.interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.findhabitat.response.SingleResponse;
import com.findhabitat.response.MultiResponse;

public interface CrudControllerInterface<T, R> {
    @GetMapping
    ResponseEntity<MultiResponse<T>> getAll();

    @GetMapping("/{id}")
    ResponseEntity<SingleResponse<T>> getOneById(@PathVariable Long id);

    @PostMapping
    ResponseEntity<SingleResponse<T>> createOne(@RequestBody R request);

    @PutMapping("/{id}")
    ResponseEntity<SingleResponse<T>> updateOneById(@PathVariable Long id, @RequestBody R request);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteOneById(@PathVariable Long id);
}
