package com.findhabitat.interfaces;

import java.util.List;

public interface CrudServiceInterface <T, R> {
 List<T> getAll();

 T getOneById(Long id);

 T createOne (R request);

 T updateOneById(Long id, R request);

 T deleteOneById(Long id);
}
